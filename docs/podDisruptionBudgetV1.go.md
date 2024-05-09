# `podDisruptionBudgetV1` Submodule <a name="`podDisruptionBudgetV1` Submodule" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PodDisruptionBudgetV1 <a name="PodDisruptionBudgetV1" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1 kubernetes_pod_disruption_budget_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.NewPodDisruptionBudgetV1(scope Construct, id *string, config PodDisruptionBudgetV1Config) PodDisruptionBudgetV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config">PodDisruptionBudgetV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config">PodDisruptionBudgetV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.putMetadata"></a>

```go
func PutMetadata(value PodDisruptionBudgetV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata">PodDisruptionBudgetV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.putSpec"></a>

```go
func PutSpec(value PodDisruptionBudgetV1Spec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec">PodDisruptionBudgetV1Spec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PodDisruptionBudgetV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.PodDisruptionBudgetV1_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.PodDisruptionBudgetV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.PodDisruptionBudgetV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.PodDisruptionBudgetV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PodDisruptionBudgetV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PodDisruptionBudgetV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PodDisruptionBudgetV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PodDisruptionBudgetV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference">PodDisruptionBudgetV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference">PodDisruptionBudgetV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata">PodDisruptionBudgetV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec">PodDisruptionBudgetV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.metadata"></a>

```go
func Metadata() PodDisruptionBudgetV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference">PodDisruptionBudgetV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.spec"></a>

```go
func Spec() PodDisruptionBudgetV1SpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference">PodDisruptionBudgetV1SpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.metadataInput"></a>

```go
func MetadataInput() PodDisruptionBudgetV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata">PodDisruptionBudgetV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.specInput"></a>

```go
func SpecInput() PodDisruptionBudgetV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec">PodDisruptionBudgetV1Spec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PodDisruptionBudgetV1Config <a name="PodDisruptionBudgetV1Config" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

&poddisruptionbudgetv1.PodDisruptionBudgetV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata,
	Spec: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata">PodDisruptionBudgetV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec">PodDisruptionBudgetV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#id PodDisruptionBudgetV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.metadata"></a>

```go
Metadata PodDisruptionBudgetV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata">PodDisruptionBudgetV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#metadata PodDisruptionBudgetV1#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.spec"></a>

```go
Spec PodDisruptionBudgetV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec">PodDisruptionBudgetV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#spec PodDisruptionBudgetV1#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#id PodDisruptionBudgetV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PodDisruptionBudgetV1Metadata <a name="PodDisruptionBudgetV1Metadata" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

&poddisruptionbudgetv1.PodDisruptionBudgetV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the pod disruption budget that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the pod disruption budget. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the pod disruption budget, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the pod disruption budget must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the pod disruption budget that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#annotations PodDisruptionBudgetV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#generate_name PodDisruptionBudgetV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the pod disruption budget.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#labels PodDisruptionBudgetV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the pod disruption budget, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#name PodDisruptionBudgetV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the pod disruption budget must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#namespace PodDisruptionBudgetV1#namespace}

---

### PodDisruptionBudgetV1Spec <a name="PodDisruptionBudgetV1Spec" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

&poddisruptionbudgetv1.PodDisruptionBudgetV1Spec {
	Selector: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector,
	MaxUnavailable: *string,
	MinAvailable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector">PodDisruptionBudgetV1SpecSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec.property.maxUnavailable">MaxUnavailable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#max_unavailable PodDisruptionBudgetV1#max_unavailable}. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec.property.minAvailable">MinAvailable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#min_available PodDisruptionBudgetV1#min_available}. |

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec.property.selector"></a>

```go
Selector PodDisruptionBudgetV1SpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector">PodDisruptionBudgetV1SpecSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#selector PodDisruptionBudgetV1#selector}

---

##### `MaxUnavailable`<sup>Optional</sup> <a name="MaxUnavailable" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec.property.maxUnavailable"></a>

```go
MaxUnavailable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#max_unavailable PodDisruptionBudgetV1#max_unavailable}.

---

##### `MinAvailable`<sup>Optional</sup> <a name="MinAvailable" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec.property.minAvailable"></a>

```go
MinAvailable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#min_available PodDisruptionBudgetV1#min_available}.

---

### PodDisruptionBudgetV1SpecSelector <a name="PodDisruptionBudgetV1SpecSelector" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

&poddisruptionbudgetv1.PodDisruptionBudgetV1SpecSelector {
	MatchExpressions: interface{},
	MatchLabels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector.property.matchExpressions">MatchExpressions</a></code> | <code>interface{}</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | A map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector.property.matchExpressions"></a>

```go
MatchExpressions interface{}
```

- *Type:* interface{}

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#match_expressions PodDisruptionBudgetV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector.property.matchLabels"></a>

```go
MatchLabels *map[string]*string
```

- *Type:* *map[string]*string

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#match_labels PodDisruptionBudgetV1#match_labels}

---

### PodDisruptionBudgetV1SpecSelectorMatchExpressions <a name="PodDisruptionBudgetV1SpecSelectorMatchExpressions" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

&poddisruptionbudgetv1.PodDisruptionBudgetV1SpecSelectorMatchExpressions {
	Key: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressions.property.key">Key</a></code> | <code>*string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressions.property.operator">Operator</a></code> | <code>*string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressions.property.values">Values</a></code> | <code>*[]*string</code> | An array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressions.property.key"></a>

```go
Key *string
```

- *Type:* *string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#key PodDisruptionBudgetV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#operator PodDisruptionBudgetV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressions.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.30.0/docs/resources/pod_disruption_budget_v1#values PodDisruptionBudgetV1#values}

---

## Classes <a name="Classes" id="Classes"></a>

### PodDisruptionBudgetV1MetadataOutputReference <a name="PodDisruptionBudgetV1MetadataOutputReference" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.NewPodDisruptionBudgetV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodDisruptionBudgetV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata">PodDisruptionBudgetV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() PodDisruptionBudgetV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Metadata">PodDisruptionBudgetV1Metadata</a>

---


### PodDisruptionBudgetV1SpecOutputReference <a name="PodDisruptionBudgetV1SpecOutputReference" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.NewPodDisruptionBudgetV1SpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodDisruptionBudgetV1SpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.resetMaxUnavailable">ResetMaxUnavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.resetMinAvailable">ResetMinAvailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.putSelector"></a>

```go
func PutSelector(value PodDisruptionBudgetV1SpecSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector">PodDisruptionBudgetV1SpecSelector</a>

---

##### `ResetMaxUnavailable` <a name="ResetMaxUnavailable" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.resetMaxUnavailable"></a>

```go
func ResetMaxUnavailable()
```

##### `ResetMinAvailable` <a name="ResetMinAvailable" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.resetMinAvailable"></a>

```go
func ResetMinAvailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference">PodDisruptionBudgetV1SpecSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.maxUnavailableInput">MaxUnavailableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.minAvailableInput">MinAvailableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.selectorInput">SelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector">PodDisruptionBudgetV1SpecSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.maxUnavailable">MaxUnavailable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.minAvailable">MinAvailable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec">PodDisruptionBudgetV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.selector"></a>

```go
func Selector() PodDisruptionBudgetV1SpecSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference">PodDisruptionBudgetV1SpecSelectorOutputReference</a>

---

##### `MaxUnavailableInput`<sup>Optional</sup> <a name="MaxUnavailableInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.maxUnavailableInput"></a>

```go
func MaxUnavailableInput() *string
```

- *Type:* *string

---

##### `MinAvailableInput`<sup>Optional</sup> <a name="MinAvailableInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.minAvailableInput"></a>

```go
func MinAvailableInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.selectorInput"></a>

```go
func SelectorInput() PodDisruptionBudgetV1SpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector">PodDisruptionBudgetV1SpecSelector</a>

---

##### `MaxUnavailable`<sup>Required</sup> <a name="MaxUnavailable" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.maxUnavailable"></a>

```go
func MaxUnavailable() *string
```

- *Type:* *string

---

##### `MinAvailable`<sup>Required</sup> <a name="MinAvailable" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.minAvailable"></a>

```go
func MinAvailable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecOutputReference.property.internalValue"></a>

```go
func InternalValue() PodDisruptionBudgetV1Spec
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1Spec">PodDisruptionBudgetV1Spec</a>

---


### PodDisruptionBudgetV1SpecSelectorMatchExpressionsList <a name="PodDisruptionBudgetV1SpecSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.NewPodDisruptionBudgetV1SpecSelectorMatchExpressionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PodDisruptionBudgetV1SpecSelectorMatchExpressionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.get"></a>

```go
func Get(index *f64) PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference <a name="PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.NewPodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PodDisruptionBudgetV1SpecSelectorOutputReference <a name="PodDisruptionBudgetV1SpecSelectorOutputReference" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/poddisruptionbudgetv1"

poddisruptionbudgetv1.NewPodDisruptionBudgetV1SpecSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PodDisruptionBudgetV1SpecSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.putMatchExpressions"></a>

```go
func PutMatchExpressions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.resetMatchExpressions"></a>

```go
func ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.resetMatchLabels"></a>

```go
func ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList">PodDisruptionBudgetV1SpecSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector">PodDisruptionBudgetV1SpecSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.matchExpressions"></a>

```go
func MatchExpressions() PodDisruptionBudgetV1SpecSelectorMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorMatchExpressionsList">PodDisruptionBudgetV1SpecSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.matchExpressionsInput"></a>

```go
func MatchExpressionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.matchLabelsInput"></a>

```go
func MatchLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.matchLabels"></a>

```go
func MatchLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() PodDisruptionBudgetV1SpecSelector
```

- *Type:* <a href="#@cdktf/provider-kubernetes.podDisruptionBudgetV1.PodDisruptionBudgetV1SpecSelector">PodDisruptionBudgetV1SpecSelector</a>

---



