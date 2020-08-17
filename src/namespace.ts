// https://www.terraform.io/docs/providers/kubernetes/r/namespace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NamespaceConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: NamespaceMetadata[];
  /** timeouts block */
  readonly timeouts?: NamespaceTimeouts;
}
export interface NamespaceMetadata {
  /** An unstructured key value map stored with the namespace that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the namespace. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the namespace, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface NamespaceTimeouts {
  readonly delete?: string;
}

// Resource

export class Namespace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_namespace',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: NamespaceMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: NamespaceMetadata[]) {
    this._metadata = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NamespaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NamespaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      timeouts: this._timeouts,
    };
  }
}
