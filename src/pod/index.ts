// generated from terraform resource schema

import { PodMetadata, 
podMetadataToTerraform, 
podMetadataToHclTerraform, 
PodMetadataOutputReference, 
PodSpec, 
podSpecToTerraform, 
podSpecToHclTerraform, 
PodSpecOutputReference, 
PodTimeouts, 
podTimeoutsToTerraform, 
podTimeoutsToHclTerraform, 
PodTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/pod#id Pod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of the pod phases that indicate whether it was successfully created. Options: "Pending", "Running", "Succeeded", "Failed", "Unknown". Default: "Running". More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/pod#target_state Pod#target_state}
  */
  readonly targetState?: string[];
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/pod#metadata Pod#metadata}
  */
  readonly metadata: PodMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/pod#spec Pod#spec}
  */
  readonly spec: PodSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/pod#timeouts Pod#timeouts}
  */
  readonly timeouts?: PodTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/pod kubernetes_pod}
*/
export class Pod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_pod";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pod to import
  * @param importFromId The id of the existing Pod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/pod#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubernetes_pod", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.27.0/docs/resources/pod kubernetes_pod} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodConfig
  */
  public constructor(scope: Construct, id: string, config: PodConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.27.0',
        providerVersionConstraint: '~> 2.0'
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
    this._targetState = config.targetState;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // target_state - computed: false, optional: true, required: false
  private _targetState?: string[]; 
  public get targetState() {
    return this.getListAttribute('target_state');
  }
  public set targetState(value: string[]) {
    this._targetState = value;
  }
  public resetTargetState() {
    this._targetState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetStateInput() {
    return this._targetState;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new PodMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PodMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new PodSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PodSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PodTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PodTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      target_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetState),
      metadata: podMetadataToTerraform(this._metadata.internalValue),
      spec: podSpecToTerraform(this._spec.internalValue),
      timeouts: podTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetState),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      metadata: {
        value: podMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PodMetadataList",
      },
      spec: {
        value: podSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PodSpecList",
      },
      timeouts: {
        value: podTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PodTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
