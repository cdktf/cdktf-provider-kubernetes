// https://www.terraform.io/docs/providers/kubernetes/r/resource_quota.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceQuotaConfig extends cdktf.TerraformMetaArguments {
  /** metadata block */
  readonly metadata: ResourceQuotaMetadata[];
  /** spec block */
  readonly spec?: ResourceQuotaSpec[];
  /** timeouts block */
  readonly timeouts?: ResourceQuotaTimeouts;
}
export interface ResourceQuotaMetadata {
  /** An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the resource quota, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the resource quota must be unique. */
  readonly namespace?: string;
}

function resourceQuotaMetadataToTerraform(struct?: ResourceQuotaMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface ResourceQuotaSpec {
  /** The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota */
  readonly hard?: { [key: string]: string };
  /** A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. */
  readonly scopes?: string[];
}

function resourceQuotaSpecToTerraform(struct?: ResourceQuotaSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hard: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.hard),
    scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.scopes),
  }
}

export interface ResourceQuotaTimeouts {
  readonly create?: string;
  readonly update?: string;
}

function resourceQuotaTimeoutsToTerraform(struct?: ResourceQuotaTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ResourceQuota extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ResourceQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_resource_quota',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: ResourceQuotaMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: ResourceQuotaMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: ResourceQuotaSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: ResourceQuotaSpec[] ) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ResourceQuotaTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ResourceQuotaTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(resourceQuotaMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(resourceQuotaSpecToTerraform)(this._spec),
      timeouts: resourceQuotaTimeoutsToTerraform(this._timeouts),
    };
  }
}
