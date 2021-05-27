// https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsiDriverConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#metadata CsiDriver#metadata}
  */
  readonly metadata: CsiDriverMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#spec CsiDriver#spec}
  */
  readonly spec?: CsiDriverSpec[];
}
export interface CsiDriverMetadata {
  /**
  * An unstructured key value map stored with the csi driver that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#annotations CsiDriver#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#generate_name CsiDriver#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the csi driver. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#labels CsiDriver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the csi driver, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#name CsiDriver#name}
  */
  readonly name?: string;
}

function csiDriverMetadataToTerraform(struct?: CsiDriverMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CsiDriverSpec {
  /**
  * Indicates if the CSI volume driver requires an attach operation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#attach_required CsiDriver#attach_required}
  */
  readonly attachRequired: boolean;
  /**
  * Indicates that the CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#pod_info_on_mount CsiDriver#pod_info_on_mount}
  */
  readonly podInfoOnMount?: boolean;
  /**
  * Defines what kind of volumes this CSI volume driver supports
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html#volume_lifecycle_modes CsiDriver#volume_lifecycle_modes}
  */
  readonly volumeLifecycleModes?: string[];
}

function csiDriverSpecToTerraform(struct?: CsiDriverSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attach_required: cdktf.booleanToTerraform(struct!.attachRequired),
    pod_info_on_mount: cdktf.booleanToTerraform(struct!.podInfoOnMount),
    volume_lifecycle_modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.volumeLifecycleModes),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html kubernetes_csi_driver}
*/
export class CsiDriver extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/csi_driver.html kubernetes_csi_driver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsiDriverConfig
  */
  public constructor(scope: Construct, id: string, config: CsiDriverConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_csi_driver',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: CsiDriverMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: CsiDriverMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: CsiDriverSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: CsiDriverSpec[] ) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(csiDriverMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(csiDriverSpecToTerraform)(this._spec),
    };
  }
}
