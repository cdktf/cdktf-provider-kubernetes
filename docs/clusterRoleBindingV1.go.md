# `clusterRoleBindingV1` Submodule <a name="`clusterRoleBindingV1` Submodule" id="@cdktf/provider-kubernetes.clusterRoleBindingV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterRoleBindingV1 <a name="ClusterRoleBindingV1" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1 kubernetes_cluster_role_binding_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.NewClusterRoleBindingV1(scope Construct, id *string, config ClusterRoleBindingV1Config) ClusterRoleBindingV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config">ClusterRoleBindingV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config">ClusterRoleBindingV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef">PutRoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject">PutSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata"></a>

```go
func PutMetadata(value ClusterRoleBindingV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

---

##### `PutRoleRef` <a name="PutRoleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef"></a>

```go
func PutRoleRef(value ClusterRoleBindingV1RoleRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putRoleRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

---

##### `PutSubject` <a name="PutSubject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject"></a>

```go
func PutSubject(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.putSubject.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClusterRoleBindingV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.ClusterRoleBindingV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.ClusterRoleBindingV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.ClusterRoleBindingV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.ClusterRoleBindingV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ClusterRoleBindingV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ClusterRoleBindingV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ClusterRoleBindingV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ClusterRoleBindingV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference">ClusterRoleBindingV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRef">RoleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference">ClusterRoleBindingV1RoleRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subject">Subject</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList">ClusterRoleBindingV1SubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRefInput">RoleRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subjectInput">SubjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadata"></a>

```go
func Metadata() ClusterRoleBindingV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference">ClusterRoleBindingV1MetadataOutputReference</a>

---

##### `RoleRef`<sup>Required</sup> <a name="RoleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRef"></a>

```go
func RoleRef() ClusterRoleBindingV1RoleRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference">ClusterRoleBindingV1RoleRefOutputReference</a>

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subject"></a>

```go
func Subject() ClusterRoleBindingV1SubjectList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList">ClusterRoleBindingV1SubjectList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.metadataInput"></a>

```go
func MetadataInput() ClusterRoleBindingV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

---

##### `RoleRefInput`<sup>Optional</sup> <a name="RoleRefInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.roleRefInput"></a>

```go
func RoleRefInput() ClusterRoleBindingV1RoleRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.subjectInput"></a>

```go
func SubjectInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterRoleBindingV1Config <a name="ClusterRoleBindingV1Config" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

&clusterrolebindingv1.ClusterRoleBindingV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.clusterRoleBindingV1.ClusterRoleBindingV1Metadata,
	RoleRef: github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef,
	Subject: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.roleRef">RoleRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | role_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.subject">Subject</a></code> | <code>interface{}</code> | subject block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#id ClusterRoleBindingV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.metadata"></a>

```go
Metadata ClusterRoleBindingV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#metadata ClusterRoleBindingV1#metadata}

---

##### `RoleRef`<sup>Required</sup> <a name="RoleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.roleRef"></a>

```go
RoleRef ClusterRoleBindingV1RoleRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

role_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#role_ref ClusterRoleBindingV1#role_ref}

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.subject"></a>

```go
Subject interface{}
```

- *Type:* interface{}

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#subject ClusterRoleBindingV1#subject}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#id ClusterRoleBindingV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ClusterRoleBindingV1Metadata <a name="ClusterRoleBindingV1Metadata" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

&clusterrolebindingv1.ClusterRoleBindingV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the clusterRoleBinding that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#annotations ClusterRoleBindingV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#generate_name ClusterRoleBindingV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRoleBinding.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#labels ClusterRoleBindingV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the clusterRoleBinding, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

### ClusterRoleBindingV1RoleRef <a name="ClusterRoleBindingV1RoleRef" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

&clusterrolebindingv1.ClusterRoleBindingV1RoleRef {
	ApiGroup: *string,
	Kind: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.apiGroup">ApiGroup</a></code> | <code>*string</code> | The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.kind">Kind</a></code> | <code>*string</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.name">Name</a></code> | <code>*string</code> | The name of the User to bind to. |

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.apiGroup"></a>

```go
ApiGroup *string
```

- *Type:* *string

The API group of the user. The only value possible at the moment is `rbac.authorization.k8s.io`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the User to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

### ClusterRoleBindingV1Subject <a name="ClusterRoleBindingV1Subject" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

&clusterrolebindingv1.ClusterRoleBindingV1Subject {
	Kind: *string,
	Name: *string,
	ApiGroup: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.kind">Kind</a></code> | <code>*string</code> | The kind of resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.name">Name</a></code> | <code>*string</code> | The name of the resource to bind to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.apiGroup">ApiGroup</a></code> | <code>*string</code> | The API group of the subject resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.namespace">Namespace</a></code> | <code>*string</code> | The Namespace of the subject resource. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The kind of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#kind ClusterRoleBindingV1#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the resource to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#name ClusterRoleBindingV1#name}

---

##### `ApiGroup`<sup>Optional</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.apiGroup"></a>

```go
ApiGroup *string
```

- *Type:* *string

The API group of the subject resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#api_group ClusterRoleBindingV1#api_group}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Subject.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The Namespace of the subject resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/cluster_role_binding_v1#namespace ClusterRoleBindingV1#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterRoleBindingV1MetadataOutputReference <a name="ClusterRoleBindingV1MetadataOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.NewClusterRoleBindingV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterRoleBindingV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterRoleBindingV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1Metadata">ClusterRoleBindingV1Metadata</a>

---


### ClusterRoleBindingV1RoleRefOutputReference <a name="ClusterRoleBindingV1RoleRefOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.NewClusterRoleBindingV1RoleRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterRoleBindingV1RoleRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroupInput">ApiGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroup">ApiGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiGroupInput`<sup>Optional</sup> <a name="ApiGroupInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroupInput"></a>

```go
func ApiGroupInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.apiGroup"></a>

```go
func ApiGroup() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRefOutputReference.property.internalValue"></a>

```go
func InternalValue() ClusterRoleBindingV1RoleRef
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1RoleRef">ClusterRoleBindingV1RoleRef</a>

---


### ClusterRoleBindingV1SubjectList <a name="ClusterRoleBindingV1SubjectList" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.NewClusterRoleBindingV1SubjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClusterRoleBindingV1SubjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get"></a>

```go
func Get(index *f64) ClusterRoleBindingV1SubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClusterRoleBindingV1SubjectOutputReference <a name="ClusterRoleBindingV1SubjectOutputReference" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-kubernetes-go/kubernetes/v12/clusterrolebindingv1"

clusterrolebindingv1.NewClusterRoleBindingV1SubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClusterRoleBindingV1SubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetApiGroup">ResetApiGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiGroup` <a name="ResetApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetApiGroup"></a>

```go
func ResetApiGroup()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroupInput">ApiGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroup">ApiGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiGroupInput`<sup>Optional</sup> <a name="ApiGroupInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroupInput"></a>

```go
func ApiGroupInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ApiGroup`<sup>Required</sup> <a name="ApiGroup" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.apiGroup"></a>

```go
func ApiGroup() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.clusterRoleBindingV1.ClusterRoleBindingV1SubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



