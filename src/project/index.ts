/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// Adjusted to handle OpenShift projects by configuring Kubernetes namespaces with OpenShift-specific annotations and labels

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  readonly id?: string;
  readonly waitForDefaultServiceAccount?: boolean | cdktf.IResolvable;
  readonly metadata: ProjectMetadata;
  readonly timeouts?: ProjectTimeouts;
}

export interface ProjectMetadata {
  readonly annotations?: { [key: string]: string };
  readonly generateName?: string;
  readonly labels?: { [key: string]: string };
  readonly name?: string;
}

export interface ProjectTimeouts {
  readonly delete?: string;
}

export function projectMetadataToTerraform(struct?: ProjectMetadata): any {
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  };
}

export function projectTimeoutsToTerraform(struct?: ProjectTimeouts): any {
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  };
}

// Project resource class representing an OpenShift project
export class Project extends cdktf.TerraformResource {
  public static readonly tfResourceType = "kubernetes_namespace";

  constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_namespace',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: 'latest',
        providerVersionConstraint: '~> 2.0' // Assuming the use of Kubernetes provider version 2.x
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._waitForDefaultServiceAccount = config.waitForDefaultServiceAccount;
    this._metadata = projectMetadataToTerraform(config.metadata);
    this._timeouts = projectTimeoutsToTerraform(config.timeouts);
  }

  private _id?: string;
  private _waitForDefaultServiceAccount?: boolean | cdktf.IResolvable;
  private _metadata: any;
  private _timeouts?: any;
}

